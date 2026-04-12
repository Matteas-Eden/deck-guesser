<p align="center">
 <h1 align="center">Guess That Deck</h1>
 <p align="center">A MTG commander deck guessing game</p>
</p>

## Overview

One time, my friends and I were playing a game. One of us would name a card from any of our commander decks, and the others would try to guess which one it was. Pretty simple game, and really tested our knowledge of each others' decks.

This is that game, but now digitally.

## How to play

1. Click 'Start'
2. You'll be presented with a random card from a deck
3. Guess the commander of the deck

For reference, all cards are taken from the decks on my Moxfield account: https://moxfield.com/users/Mattix

## Development

The site is built with [Next.js](https://nextjs.org/) and [Deno](https://deno.com/), leveraging the Moxfield and Scryfall APIs. Shout-out to the unofficial [Moxfield API](https://github.com/MarioMH8/moxfield-api), without which this would've been a lot more difficult.

To run the site locally, clone the repo and run `deno task dev` in the root directory.
