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
4. 💛 Favorites 
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
    - [x] Back action on albums
    - [x] Wide screen take whole width and height
    - [x] Separate styles in relevant files (use css modules?)
    - [x] Style hide section on top of menu 
    - [x] Load all albums & photos with pagination 
    - [x] Scroll only main container, fixed header and navigation
    - [x] Make back arrow sticky (update z-index of nav to be larger)
    - [x] Empty favorites view, should not show on initial load
    - [x] Action to close the menu when clicked outside of it
    - [ ] Scroll to top after going back
    - [ ] Dark theme
7. Tests
    - [x] Set up
    - [ ] Components
    - [ ] Logic

Image credits:
- Star by ratubilqis1986 from <a href="https://thenounproject.com/browse/icons/term/star/" target="_blank" title="Star Icons">Noun Project</a>
- Menu by DewDrops from <a href="https://thenounproject.com/browse/icons/term/menu/" target="_blank" title="menu Icons">Noun Project</a>
- Arrow Back by Division Icons from <a href="https://thenounproject.com/browse/icons/term/arrow-back/" target="_blank" title="Arrow Back Icons">Noun Project</a>
- Rainbow icons by freepik <a href="https://www.freepik.com/free-vector/colorful-rainbow-set_2266161.htm" target="_blank" title="Rainbow Set">FreePik</a>
- Truck by <a href="https://indiefolio.com/project/59d622cb6e193/motion-series-1-loading-truck" target="_blank" title="truck">Indiefolio</a>
