# Using the repository

## Setup Node-RED  
### Installation 

`git clone https://github.com/Marius998/PP-NodeRED-Fitech4.0.git`

`sudo npm install -g --unsafe-perm node-red`

Docker `docker run -it -p 1880:1880 --name mynodered nodered/node-red`

Snap `sudo snap install node-red`

Navigate to node-red installation directory 

Run `npm install /path-to-/PP-NodeRED-Fitech4.0/custom_nodes` ( folder inside this repository )


### Running the application

Start application with `node-red`

Import flows from PP-NodeRED-Fitech4.0/flows/flows.js ( Inside Node-RED -> Menu in top right corner -> Import )

