# Color Mosaic Photo App


## Description
A responsive photo app. The user can view all photos, browse albums, mark photos as favorites, and view a list of his favorite photos.

View at: https://nhristova.github.io/photo-app/

## Tasks
1. 🛠 Tech: 
    - [x] ReactJS
    - [x] Redux
    - [x] Redux-Persist
2. Data source: https://jsonplaceholder.typicode.com/photos
    - The provided endpoint loads data in bulk. The app would be slow if it needs to load all the data for every view. One solution is to load data only once when the app loads, store it in state, and use it from there. However, this could create discrepancies if data is updated on the server. Another solution would be to display stored data initially, but still fetch from server for every view. Then, when new data is fetched from the server, update the UI (if needed). I chose the first solution, considering the data source remains unchanged and the endpoint returns all the app data.
    - [x] Use local data (for backup if api fails)
    - [x] Fetch data
    - [x] Store in Redux
3. UI
    - [x] Albums list view  (1, 2, 3, 4, 5...) - actions - open album
    - [x] Single album view 
    - [x] Favorites album view
    - [x] Album card component - image, name
    - [x] Photo card component - image, title - actions - add/remove favorite 
    - [x] Layout - header, menu, main sections
    - [x] Menu - 🍔 opens from hamburger icon on small screens, fixed position on larger screens
4. 💛 Favourites 
    - [x] Actions - add, remove fav
    - [x] Data stored in Redux State
    - [x] Persist favorites after page reload (restart?)
5. 🚀 Deploy 
    - [x] Static github page
    - [x] 🐛 404 after page refresh on routes (only if deployed, locally working) - caused by github pages not supporting client-side routing well - switched from createBrowserRouter to createHashRouter
    - [x] 🐛 Error page not loading after switch to createHashRouter
6. 🦋 Styles - make it look good!
    - [x] Photos list responsive
    - [x] Albums list responsive
    - [ ] Back action on albums
    - [ ] Wide screen take whole width and height
    - [ ] Separate styles in relevant files
    - [x] Style hide section on top of menu 
    - [ ] Action to close the menu when clicked outside of it
    - [ ] Load all albums & photos, pagination?, sticky header?
    - [ ] Dark theme?
7. Tests

Image credits:
- Star by ratubilqis1986 from <a href="https://thenounproject.com/browse/icons/term/star/" target="_blank" title="Star Icons">Noun Project</a>
- Menu by DewDrops from <a href="https://thenounproject.com/browse/icons/term/menu/" target="_blank" title="menu Icons">Noun Project</a>
- Arrow Back by Division Icons from <a href="https://thenounproject.com/browse/icons/term/arrow-back/" target="_blank" title="Arrow Back Icons">Noun Project</a>
- Butterfly by freepik <a href="https://www.freepik.com/free-vector/colorful-rainbow-set_2266161.htm" target="_blank" title="butterfly">FreePik</a>
- Truck by <a href="https://indiefolio.com/project/59d622cb6e193/motion-series-1-loading-truck" target="_blank" title="truck">Indiefolio</a>
