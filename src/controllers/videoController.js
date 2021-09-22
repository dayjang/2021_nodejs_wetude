// export const trending = (req,res) => res.send(`<!DOCTYPE html><html lang="en"><head><title>WETUBE!</title></head><body><h1>HOME Trending..</h1></body><footer>ha</footer></html>`);
const fakeUser = {
    username: "Diane",
    loggedIn: true
    
};

const videos = [1,2,3,4,5,6,7];
export const trending = (req,res)=> res.render("home", { pageTitle: "Home" , potato: "Tomato", fakeUser: fakeUser, videos});
export const see = (req,res) => res.render("watch");
export const edit = (req,res) => res.render("edit");

export const search = (req,res) => res.send("search a Video");
export const upload = (req,res) => res.send("upload a Video");
export const deleteVid = (req,res) => res.send("Delete a Video");
