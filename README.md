# Commissioning FT-Factory 4.0

## Node-RED Setup 
### Installation 
`sudo npm install -g --unsafe-perm node-red`

Docker `docker run -it -p 1880:1880 --name mynodered nodered/node-red`

Snap `sudo snap install node-red`

### Import flows

Start `node-red`

Import **PP-NodeRED-Fitech4.0/flows.js** 

## Factory Setup 
### Checklist 
1. Connected to Internet ( Sync Network Time Protoco )
2. Manually set/sync time and date on all txt controllers
3. wait for all controllers to be connected to the factorys router
4. Start main txt ( the one with the camera ) first
