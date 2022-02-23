# Store Assignment

Hi! It's me and this is my assinment solution.


# Install and Run

The project was built with **create-react-app** bootstrap. You will find a folder named `server` where API sits tight. so to install the app locally: 
- clone project
- `cd to-the-project-file`
-  run `yarn` to install all dependencies (I used `yarn` so you might face issue with `package.lock` if you use `npm`. simply follow the terminal instructions !!)
- Now let's install the server: `cd server` then run `yarn`
- Get back one step with `cd ..` and run `yarn start` wich will run both API server and client server
- To let cloudinary work properly you need to create `.env` file inside `/server/` dir. Make sure it's in the root of the dir. Then the following must be included:
  - DB_URL=mongodb://localhost:27017/store
  - CLOUD=insert-your-cloudinary-name-here
  - CLOUD_API_KEY=insert-your-cloudinary-api-key
  - CLOUD_API_SECRET=insert-your-cloudinary-api-secret    

# What could have gone better
- **Optimization**: There is a lot to optimize in the project to become production-ready.. Simply I did not have enough time for that.
-  **Code structure**: The app structure is not an over-kill.. Again, to produce a better structure, naming and clearer code, I would need to spend enough amount of time. But it is fair to say that I tried to fulfill all main features demands.
## Finally
I wish you are satisfied with this work... Thanks  

