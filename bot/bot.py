from privatekeylmao import TOKEN,password

import discord
import os
import time
import random
import logging
from discord.ext import commands, tasks
from bs4 import BeautifulSoup
import requests

started = False

client = commands.Bot(command_prefix=">")


@client.event
async def on_ready():
    global started
    await client.change_presence(activity = discord.Game(name = '> for a list of commands'))
    if not started:
        started = True
        #Before you run tasks take the text file


#-----Commands-----
class Commands(commands.Cog):
    def __init__(self, client):
        self.client = client
        
    @commands.command(help = "Gives you a code to use on Tinderwal!")
    async def request(self,ctx):
        person = ctx.author
        channel  = await person.create_dm()
        
        lmao = requests.post('http://144.217.90.215:3000/create', json={\
        'id': str(ctx.author.id), 'name': str(ctx.author),\
        'avatar':str(ctx.author.avatar_url),'key':password})
        json = lmao.json()
        await channel.send(json['passcode'])
        await channel.send("Now head over to https://fairnightzz.github.io/Tinderwal/ to vote now!")
        



client.add_cog(Commands(client))
client.run(TOKEN)
