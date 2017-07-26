-- STEP 3
update products
set description = $2
where productid = $1;
