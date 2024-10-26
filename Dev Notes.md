# Melissa Lashes - Dev Notes

## CSS

### Color palette

``` css

/* CSS HEX */
--fairy-tale: #F2C7D0ff;
--black: #000000ff;
--platinum: #DFDDDDff;
--white: #FFFFFFff;
--silver: #C1B2ABff;

/* CSS HSL */
--fairy-tale: hsla(347, 62%, 86%, 1);
--black: hsla(0, 0%, 0%, 1);
--platinum: hsla(0, 3%, 87%, 1);
--white: hsla(0, 0%, 100%, 1);
--silver: hsla(19, 15%, 71%, 1);


/* Gradient */
- gradient-top: linear-gradient(0deg, #F2C7D0ff, #000000ff, #DFDDDDff, #FFFFFFff, #C1B2ABff);
- gradient-right: linear-gradient(90deg, #F2C7D0ff, #000000ff, #DFDDDDff, #FFFFFFff, #C1B2ABff);
- gradient-bottom: linear-gradient(180deg, #F2C7D0ff, #000000ff, #DFDDDDff, #FFFFFFff, #C1B2ABff);

- gradient-left: linear-gradient(270deg, #F2C7D0ff, #000000ff, #DFDDDDff, #FFFFFFff, #C1B2ABff);

- gradient-top-right: linear-gradient(45deg, #F2C7D0ff, #000000ff, #DFDDDDff, #FFFFFFff, #C1B2ABff);
- gradient-bottom-right: linear-gradient(135deg, #F2C7D0ff, #000000ff, #DFDDDDff, #FFFFFFff, #C1B2ABff);
- gradient-top-left: linear-gradient(225deg, #F2C7D0ff, #000000ff, #DFDDDDff, #FFFFFFff, #C1B2ABff);
- gradient-bottom-left: linear-gradient(315deg, #F2C7D0ff, #000000ff, #DFDDDDff, #FFFFFFff, #C1B2ABff);
- gradient-radial: radial-gradient(#F2C7D0ff, #000000ff, #DFDDDDff, #FFFFFFff, #C1B2ABff);

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
</style>

// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 200 to 1000

.nunito-<uniquifier> {
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}


<style>
@import url('https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap');
</style>

.rouge-script-regular {
  font-family: "Rouge Script", cursive;
  font-weight: 400;
  font-style: normal;
}


<style>
@import url('https://fonts.googleapis.com/css2?family=My+Soul&display=swap');
</style>

.my-soul-regular {
  font-family: "My Soul", cursive;
  font-weight: 400;
  font-style: normal;
}


--ft-main: "Nunito", sans-serif;
--ft-cursive: "Rouge Script", cursive;
--ft-handwrite: "My Soul", cursive;

```