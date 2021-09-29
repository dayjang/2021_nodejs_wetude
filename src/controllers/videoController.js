let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos });
  };
export const see = (req,res) => {
  const { id } = req.params; // const id = preq.parmas.id;
  const video = videos[id-1];
  return res.render("watch", {pageTitle:`Wathcing ${video.title}`,video})
};

export const getEdit = (req,res) => {
  const { id } = req.params; // const id = preq.parmas.id;
  const video = videos[id-1];
  res.render("edit",{pageTitle:`Edit ${video.title}`, video})
};

export const postEdit = (req, res) => {};


export const search = (req,res) => res.send("search a Video");
export const upload = (req,res) => res.send("upload a Video");
export const deleteVid = (req,res) => res.send("Delete a Video");
