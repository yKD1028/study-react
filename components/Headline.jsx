import classes from './Headline.module.css'



export function Headline(props) {
  return (
    <div>
        <h1 className={classes.title}>
          Hello <a href="https://nextjs.org"> {props.page} Page</a>
        </h1>

        <p className={classes.description}>
          Get started by editing {props.children}
        </p>
        {/* <button onClick={props.onClick}>BUTTON</button> */}
    </div>

  );
}
