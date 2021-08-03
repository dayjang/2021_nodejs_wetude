# wetube reloaded
TWO BIG Domains of our project:
videos | user


# GLOBAL ROUTER (just for simple, pretty domains)
/          -> Home, homepage
/join       -> uers/join
/login      -> uers/login? this make more sense? .. these are exception 
/search     -> videos/search

# USER ROUTER
/users/edit            not good =>     /edit-profile
/users/delete                          /delete-profile

# VIDEAO ROUTER
/videos/:id                            /watch videos    

/videos/:id/edit                           /edit videos
/videos/:id/delete                         /delete videos
/videos/upload                           /upload videos
/videos/comments
/videos/comments/delete 


