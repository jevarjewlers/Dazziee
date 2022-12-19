import "./Couponss.scss";



const data = [
    {ID  : "01", Code:  "20% Off Entire Order", Discounts:  "20%", Start_Date: "February 14 2021",  End_Date:  "February 17 2021" },
    {ID  : "02", Code:  "10% Off Entire Item", Discounts:  "10%", Start_Date: "February 14 2021", End_Date:  "February 17 2021"},
    {ID  : "03", Code:  "50% Off Entire Order", Discounts:  "50%", Start_Date: "February 14 2021",  End_Date: "February 17 2021" },
    {ID  : "04", Code:  "10% Off Entire Order", Discounts:  "10%", Start_Date: "February 14 2021",  End_Date:  "February 17 2021"},
    {ID  : "05", Code:  "60% Off Entire Order", Discounts:  "60%", Start_Date: "February 14 2021",  End_Date:  "February 17 2021" },
    {ID  : "06", Code:  "70% Off Entire Order", Discounts:  "70%", Start_Date: "February 14 2021",  End_Date:  "February 17 2021" },
    {ID  : "07", Code:  "20% Off Entire Order", Discounts:  "20%", Start_Date: "February 14 2021",  End_Date:  "February 17 2021" },
    {ID  : "08", Code:  "20% Off Entire Order", Discounts:  "20%", Start_Date: "February 14 2021",  End_Date:  "February 17 2021" }
  ]
 export const Couponss = () => {

    return (
        <div className="tables">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Code</th>
                    <th>Discounts</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Activate</th>
                </tr>
                {data.map((val, key)=>{
                    return (
                        <tr key={key}>
                            <td>{val.ID}</td>
                            <td>{val.Code}</td>
                            <td>{val.Discounts}</td>
                            <td>{val.Start_Date}</td>
                            <td>{val.End_Date}</td>
                            <td>{val.Activate}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
  };
  