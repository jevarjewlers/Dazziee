import "./Customerss.scss";


const data = [
    {ID  : "XXX1", Name:  "Arlene McCoy", Join_Date:  "1 Feb 2021", Total_Visit: 2,  Purchesed_Items:  "omericano(10); latte(8);cappuccino(14);macchiato(1);vanilla late(5)", Total_Spend: "$490.51" },
    {ID  : "XXX2", Name:  "Savannah Nguyen", Join_Date:  "3 Feb 2021", Total_Visit: 3,  Purchesed_Items:  "omericano(14); latte(8);cappuccino(14);macchiato(1);vanilla late(5)", Total_Spend: "$396.91" },
    {ID  : "XXX3", Name:  "Jacob Jones", Join_Date:  "5 Feb 2021", Total_Visit: 6,  Purchesed_Items:  "omericano(14); latte(8);cappuccino(14);macchiato(1);vanilla late(5)", Total_Spend: "$406.27" },
    {ID  : "XXX4", Name:  "Jerome Ball", Join_Date:  "1 Feb 2021", Total_Visit: 12,  Purchesed_Items:  "omericano(14); latte(8);cappuccino(14);macchiato(1);vanilla late(5)", Total_Spend: "$767.50" },
    {ID  : "XXX5", Name:  "Cody Fisher", Join_Date:  "18 Feb 2021", Total_Visit: 14,  Purchesed_Items:  "omericano(14); latte(8);cappuccino(14);macchiato(1);vanilla late(5)", Total_Spend: "$475.22" },
    {ID  : "XXX6", Name:  "Kathryn Murphy", Join_Date:  "12 Feb 2021", Total_Visit: 53,  Purchesed_Items:  "omericano(14); latte(8);cappuccino(14);macchiato(1);vanilla late(5)", Total_Spend: "$601.13" },
    {ID  : "XXX7", Name:  "Jane Cooper", Join_Date:  "1 Feb 2021", Total_Visit: 21,  Purchesed_Items:  "omericano(14); latte(8);cappuccino(14);macchiato(1);vanilla late(5)", Total_Spend: "$293.01" },
    {ID  : "XXX8", Name:  "Ronald Richards", Join_Date:  "15 Feb 2021", Total_Visit: 31,  Purchesed_Items:  "omericano(14); latte(8);cappuccino(14);macchiato(1);vanilla late(5)", Total_Spend: "$948.41" },
    {ID  : "XXX9", Name:  "Theresa Webb", Join_Date:  "21 Feb 2021", Total_Visit: 41,  Purchesed_Items:  "omericano(14); latte(8);cappuccino(14);macchiato(1);vanilla late(5)", Total_Spend: "$928.41" },
    {ID  : "XX10", Name:  "Annette Black", Join_Date:  "11 Feb 2021", Total_Visit: 6,  Purchesed_Items:  "omericano(14); latte(8);cappuccino(14);macchiato(1);vanilla late(5)", Total_Spend: "$473.85" }
  ]
 export const Table = () => {

    return (
        <div className="tables">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Join Date</th>
                    <th>Total Visit</th>
                    <th>Purchased Items</th>
                    <th>Total Spend</th>
                </tr>
                {data.map((val, key)=>{
                    return (
                        <tr key={key}>
                            <td>{val.ID}</td>
                            <td>{val.Name}</td>
                            <td>{val.Join_Date}</td>
                            <td>{val.Total_Visit}</td>
                            <td>{val.Purchesed_Items}<p><a href="">Sea More</a></p></td>
                            <td>{val.Total_Spend}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
  };
  