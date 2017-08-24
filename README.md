# Bull Test

This project was created with the intention to reproduce some issues I've seen in the simplest way possible.

Change redis settings by editing config.ini

## How to use

In order to use this to reproduce the issues simple use the npm scripts.``

### Jobs App
The jobs app simply creates the bull handlers

> npm run start-job
> npm run start-job-2 (same thing essentially)

### Add recurring job
To add a recurring job simply run

> npm run add-recurring-job

### Add job
To add a job (non-recurring) simply run

> npm run add-job

## Issues

Currently there are two issues I've created that this project was created to reproduce (666 and 672).

### 666 - Duplicate recurring jobs
Here are the instructions to duplicate this bug:

1. Start jobs service
2. Add recurring job
3. While recurring job is being processed restart job service (you will know this by viewing the terminal logs)
4. Wait for job to process again after restart
5. View bull:error test:delayed to view duplicates

### 672 - Multi process bug
Here are the instructions to duplicate this bug:

1. Start jobs service
2. Add 10 jobs (or less...)
3. Start both handlers 1 and 2
5. Let it run the jobs, check the jobs after completion to see the error


