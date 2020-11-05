# FieldtypeGridSpace
A grid selector for space design

An input field for placing DOM elements in horizontal grids.

An example of use in frontend:

```
$gridspace=$item->gridspace;

$gridspace=explode(",",$gridspace);
$gridcolumnstart=	intval($gridspace[0])+1;
$gridcolumnend=intval(end($gridspace))+2;

content.='<div data-sort="'.$page->sort.'" style="'.$grid.'">';
```
