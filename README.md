# FieldtypeGridSpace
A grid selector for space design

An input field for placing DOM elements in horizontal grids based on Bootstrap grid system.

## An example of use in frontend:

PHP
```
foreach($items as $item){
  $gridspace=$item->gridspace;

  $gridspace=explode(",",$gridspace);
  $gridcolumnstart=	intval($gridspace[0])+1;
  $gridcolumnend=intval(end($gridspace))+2;
  
  content.='<div data-sort="'.$item->sort.'" style="'.$grid.'">Lorem ipsum<div>';
}
```

CSS (Use the percentage of width and the amount of columns, in this example 7 columns with a 14.28% of width - 100/7 -)
```
.grid {
  display: grid;
  grid-template-columns: 14.28% 14.28% 14.28% 14.28% 14.28% 14.28% 14.28%;;
}
```

HTML (generated in PHP)
```
<div class="grid">
  <div style="grid-column-start: 1;grid-column-end: 2;" >A</div>
  <div style="grid-column-start: 3;grid-column-end: 5;" >A</div>
  <div style="grid-column-start: 7;grid-column-end: 8;" >A</div>
</div>
```

## Known bugs:
-The field cannot yet be used in repeater fields or twice at the same page.
