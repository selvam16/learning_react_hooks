import faker from "faker";
import { useMemo, useState } from "react";
import { debounce, throttle } from "lodash";
import { Grid } from "@material-ui/core";

export default function AutoComplete() {
  const [query, setQuery] = useState("");
  const names = Array.from(Array(400), () => {
    return faker.name.findName();
  });

  const filterNames = names.filter((name) => {
    return name.toLowerCase().includes(query.toLowerCase());
  });

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  const debounceHandler = useMemo(() => {
    return debounce(handleOnChange, 1000);
  }, []);

  const throttleHandle = useMemo(()=>{
    return throttle(handleOnChange, 1000);
  },[])

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={6}>
        <input type="text" onChange={debounceHandler} />
      <ul style={{ alignItems: "left" }}>
        {filterNames.map((name) => (
          <li
            style={{ listStyleType: "none", alignItems: "left" }}
            key={name.toString()}
          >
            {name}
          </li>
        ))}
      </ul>
        </Grid>
        <Grid item xs={6}>
        <input type="text" onChange={throttleHandle} />
      <ul style={{ alignItems: "left" }}>
        {filterNames.map((name) => (
          <li
            style={{ listStyleType: "none", alignItems: "left" }}
            key={name.toString()}
          >
            {name}
          </li>
        ))}
      </ul>
        </Grid>

      </Grid>
      
    </div>
  );
}
