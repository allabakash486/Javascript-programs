let item = {
                Id:'1',
                Image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/dosa-recipe.jpg ",
                Name:Dosa,
                Price:40,
                Quantity:1,
                TotalPrice:40
            };
    let qty = 1
    function decfn()
    {
        if (qty>=1)
        { 
            --qty
            qty.textcontent = qty;
        }
    }
    function incfn()
    {
        ++qty
        qty.textcontent = qty;
    }
    let htmlcode = `<tr>
                        <td>1</td>
                        <td ><img src="${item.Image}" alt="" "width="30px" height="30px" ></td>
                        <td>"${item.Name}"</td>
                        <td>"${item.Price}"</td>
                        <td><button onclick="decfn();">-</button><span>"${item.Quantity}"</span><button onclick="incfn();">+</button></a></td>
                        <td>"${item.TotalPrice}"</td>
                    </tr>`;
                    
    let itemDisp = document.getElementById("onee");
    itemDisp.innerHTML = htmlcode;