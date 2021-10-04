/*
const Countries =()=>{

    const list = ['India','America','Canada','Dubai']
    return (
        <div>
            <h1>Countries</h1>

            <h3>
                {
                    list.map((country)=>{
                        return (
                            <h3>{country}</h3>
                        )
                    })
                }
            </h3>
        </div>
*/


/* accessing objects  */

const Countries=()=>{
    const list=[
        {
            name: 'India',
            capital: 'New_Delhi'
        },

        {
            name: 'America',
            capital: 'Washington DC'
        },
        {
            name: 'Canada',
            capital: 'Ottawa'
        },
        {
            name: 'Dubai',
            capital: 'Dubai'
        }
    ]
    return(
        <div>
            <h1>Countries</h1>
            {
                list.map((country,index)=>(
                    <div key={index}>
                        <h2>{country.name}</h2>
                        <p>{country.capital}</p>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Countries;