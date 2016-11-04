rez-menu
========================================

_simple responsive menu_

###Using rez-menu

####Add style sheets
- add link to CSS directly to your HTML file:
```html
<link rel="stylesheet" type="text/css" href="{styles-file-path}/style-rez-menu.css"/>
```
- add styles to your main SCSS styles file:
```scss
@import '{styles-file-path}/rez-menu';
```


####Add menu HTML
```html
<!-- Navigation menu -->
<header class="header">
	<div class="container">
		<!-- Custom navbar -->
		<nav class="nav" id="nav">
			<button class="nav__toggle" type="button" id="nav-toggle">
				<span></span>
				<span></span>
				<span></span>
			</button>
            <a class="navbar__logo" href="#!">
				<span class="navbar__sample">Logo</span>
            </a>
			<ul class="nav__list">
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Menu 2</a></li>
                <li><a href="#!">Menu 3</a></li>
                <li><a href="#!">Menu 4</a></li>
                <li><a href="#!">Menu 5</a></li>					
			</ul>
		</nav>
	</div>
</header>
```

####Include JS file
```html
<script src="{path-to-js-file}/rez_menu.js"></script>
```

####Initialize 
```html
rez_menu({option:setting});
```



###Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
break_point | integer | 768 | Screen width in [px] when the menu collapses to mobile view.
target | string | '.nav__list' | Target to which 'collapse' will be applied. Can be id or class and is written including single quotes ('). Example: '.some-class' / '#some-id'.
duration | integer | 400 | Collapse animation duration in [ms].
auto_collapse | boolean | true | Triggers menu auto-collapse on menu link click.
toggle_animate | boolean | true | Make the 'hamburger' icon animate into 'x' when the menu is shown.
fixed | boolean | true | Make the menu stick to the top of the page on mobile view.
logo_center | boolean | true |  Move the logo to center on mobile view.
backdrop_close | boolean | true | Clicking on area outside the menu will close it.
backdrop_show | boolean | true | Toggle visibility of the backdrop area. If set to `false` it will keep it's functionality, it will just not be visible.

####Browser compatibility
- android 4.4+
- iOS 7+
- Edge 13+
- IE 9+
- Firefox 20+
- Chrome 20+

#### Dependencies

jQuery 1.7

#### License

Copyright (c) 2016 Nikola Jovanovic - coderman

Licensed under the MIT license.

Free as in free.

