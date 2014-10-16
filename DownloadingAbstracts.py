# -*- coding: utf-8 -*-
# <nbformat>3.0</nbformat>

# <codecell>

import urllib2
from scrapy.selector import Selector
from os import listdir
from os.path import isfile, join

# <codecell>

filename = 'abstractpage.txt'
file(filename, "wb").write(urllib2.urlopen('http://dh2014.org/program/abstracts/').read())

# <codecell>

with open('abstractpage.txt','rt') as abpage:
    body = abpage.read()

# <codecell>

pages = Selector(text=body).xpath('//a[starts-with(@href,\'http://dharchive.org/paper/DH2014/\')]/@href').extract()

# <codecell>

for page in pages:
    filename = page.split('/')[-1]
    file("abstracts/" + filename, "wb").write(urllib2.urlopen(page).read())

# <codecell>

def getFiles(path):
    """Function to return a list of all files within a folder"""
    files = [ f for f in listdir(path) if isfile(join(path,f)) and f[0] != '.' ]
    return files

# <codecell>

types = set([fname.split('-')[0] for fname in getFiles("abstracts")])
print types

# <codecell>

totalconfthings = 0
totalpython = 0
totaljavascript = 0
totaljava = 0

for ab in getFiles("abstracts/"):
    name = ab.split('.')[0]
    with open("abstracts/" + ab,'rb') as abfile:
        body = abfile.read()
    text = "".join(Selector(text=body).xpath('//p//descendant::text()').extract())
    if ab.endswith('.xml'):
        totalconfthings += 1
        if 'python' in text.lower():
            totalpython += 1
            print ab, 'python'
        if 'javascript' in text.lower():
            totaljavascript += 1
            print ab, 'javascript'
        elif 'java' in text.lower():
            totaljava += 1
            print ab, 'java'
    with open("abstracts/" + name + ".txt", 'wt') as about:
        about.write(text.encode('utf8'))
        
print totalconfthings, "total"
print totalpython, "total python"
print totaljavascript, "total javascript"
print totaljava, "total java"

    #print text.lower()
#     if "humanities" in text.lower():
#         print "python found in", ab

# <codecell>

text = "".join(Selector(text=body).xpath('//p//descendant::text()').extract())

# <codecell>


