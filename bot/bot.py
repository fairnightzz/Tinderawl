from privatekeylmao import TOKEN

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
def create_code():
    return 0

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
        
    @commands.command(help = "Send a code to verify your identity when doing the survey")
    async def request(self,ctx):
        person = ctx.author
        channel  = await person.create_dm()
        code = create_code()
        await channel.send(code)
        await channel.send(ctx.author.avatar_url)
        



client.add_cog(Commands(client))
client.run(TOKEN)
