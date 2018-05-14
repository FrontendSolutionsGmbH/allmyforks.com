# bitcoin-forks
coinmarketcap for bitcoin forks

Bitcoin-Forks is an open source and free to use project for collecting and aggregating forks of bitcoin. 
It's purpose is to get an overview of the potential you as a bitcoin holder have due to its forks and how to get/sell the coins safely.

It contains the following parts (each in a sub directory)

## Data Crawler

The crawler is responsible for collecting needed data from coinmarketcap and other websites. As there are some statistics over a period of time the data will be stored as long as possible.

## Data Aggregator

The aggregator works on the ouput of the crawler. It consumes the needed information for the Website Builder and makes it available in a json format

## Website Builder

The website builder creates optimized .html and .json files for a fast user experience on the website - speed is the name of the game ;-)

## Website

The final website. It contains only static files (html, js, ...). No backend is needed. As much as possible will be inline

## Planner

This directory contains some wiremocks and plans for further development


## General

You are very welcome to help and join our awesome project :-)



2018 - Frontend Solutions
