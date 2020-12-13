#!/usr/bin/env node

const fs = require('fs')
const yargs = require('yargs')

yargs.usage('Usage: $0 [options]')
.alias('f', 'foreground')
.nargs('f', 1)
.describe('f', 'Set foreground color')
.demandOption(['f'])
.alias('b', 'background')
.nargs('b', 1)
.describe('b', 'Set background color')
.demandOption(['b'])
.help('h')
.alias('h', 'help').argv

const createSetings = (yargs) => {
    let settings = {
        "workbench.colorCustomizations": {
        "titleBar.activeForeground": yargs.argv.foreground.toString().slice(0, 7),
        "titleBar.inactiveForeground": yargs.argv.foreground.toString().slice(0, 7) + 'CC',
        "titleBar.activeBackground": yargs.argv.background.toString().slice(0, 7),
        "titleBar.inactiveBackground": yargs.argv.background.toString().slice(0, 7) + 'CC'
        }
    }

    fs.mkdirSync('.vscode', { recursive: true })
    fs.writeFileSync('.vscode/settings.json', JSON.stringify(settings))
}

createSetings(yargs)