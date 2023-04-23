# Photo App

View at: https://nhristova.github.io/photo-app/

1. 🛠 Tech: 
    - [x] ReactJS
    - [x] Redux
    - [x] Redux-Persist
2. Data source: https://jsonplaceholder.typicode.com/photos
    - [x] Stage 1 - use local data
    - [ ] Stage 2 - fetch data
    - [ ] Stage 3 - store in Redux
    - [ ] Stage 99 - own api?
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
    - [ ] Albums list responsive
    - [ ] Back action on albums
    - [ ] Wide screen take whole space
    - [ ] Separate styles in relevant files
    - [ ] Style hide section on top of menu 
    - [ ] Action to close the menu when clicked outside of it
7. Tests

Credits:
- Star by ratubilqis1986 from <a href="https://thenounproject.com/browse/icons/term/star/" target="_blank" title="Star Icons">Noun Project</a>
- Menu by DewDrops from <a href="https://thenounproject.com/browse/icons/term/menu/" target="_blank" title="menu Icons">Noun Project</a>
- Butterfly by freepik <a href="https://www.freepik.com/free-vector/colorful-rainbow-set_2266161.htm" target="_blank" title="butterfly">FreePik</a>
- Truck by <a href="https://indiefolio.com/project/59d622cb6e193/motion-series-1-loading-truck" target="_blank" title="truck">Indiefolio</a>
