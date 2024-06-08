function saveItem(item){
    let items = readItems();
    items.push(item);
    let val = JSON.stringify(items);
    console.log(val);//display the string.
    localStorage.setItem("services",val);

}

function readItems(){
    let data = localStorage.getItem("services");

    if(!data){
        return [];
    }else{
        let list = JSON.parse(data);
        return list;
    }
}