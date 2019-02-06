# inexnavbar
A simple easy to use responsive nav bar created by Inexsoft shared with the community

## How to use the plugin

First, you need to add Fontawesome, Google Material icon fonts and jquery to your page as below
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 <link  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```
Remember to compile the sass css file and include it in the page

```
<script>
    $(document).ready(function(){
        $('.inexnavbar').displayInexNavBar();            
     });
</script>
```

Finally you can create the nav bar structure as below.

```
 <div class="inexnavbar">
        <nav>
            <ul class="main-menu">
                <li ><a href='#'>Main Item1</a></li>
                <li ><a href='#'>Main Item2</a></li>
                <li ><a href='#'>Main Item3</a>
                <ul class="sub-menu">
                    <li><a href='#'>Sub Menu1 Item1 </a></li>
                    <li><a href='#'>Sub Menu1 Item2 </a></li>
                    <li ><a href='#'>Sub Menu1 Item3 </a>
                    <ul class="sub-menu">
                            <li><a href='#'>Sub Menu1 Sub Menu1 Item1 </a></li>
                            <li><a href='#'>Sub Menu1 Sub Menu1 Item2 </a></li>
                            <li><a href='#'>Sub Menu1 Sub Menu1 Item3 </a></li>
                        </ul>
                    </li>
                </ul>
            </li>
                <li ><a href='#'>Main Item4</a>
                <ul class="sub-menu">
                        <li><a href='#'>Sub Menu2 Item1 </a></li>
                        <li><a href='#'>Sub Menu2 Item2 </a></li>
                        <li><a href='#'>Sub Menu2 Item3 </a></li>
                    </ul>
                </li>
            </ul>
            <a class="nav-icon"><i class="material-icons">view_headline</i></a>
        </nav>
    </div>
    
  ```  
    
## Options Available
    
    'navWidth': Sets the width of the nav bar
    'upIconClass': changes the Up arrow on menu
    'downIconClass': changes the down arrow on menu
    
    
    Below are default values
    
    'navWidth': 100,
    'upIconClass': 'fa fa-angle-double-up',
    'downIconClass': 'fa fa-angle-double-down'
    
    Can be used as below

```
<script>
        $(document).ready(function(){
            $('.inexnavbar').displayInexNavBar(
                {
    'navWidth': 50,
    'upIconClass': 'fa fa-arrow-circle-up',
    'downIconClass': 'fa fa-arrow-circle-down'
 });         
        });
</script>
```
    
    
    
    
