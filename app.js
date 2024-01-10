// const heading = React.createElement('h1', {id:'abc', name:'xyz'}, 'hello World from React'); // It returns an object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); //converts object into h1 tag(converts and put in dom)

const h1 = React.createElement('h1', {}, 'I am h1 tag');
const h2 = React.createElement('h1', {}, 'I am h2 tag');
const child = React.createElement('div', {id:'child'}, [h1,h2]);
const child2 = React.createElement('div', {id:'child2'}, [h1,h2]);
const parent = React.createElement('div', {id:'parent'}, [child, child2]); //Object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); //converts object into h1 tag

{/* <div id='parent'>
    <div id='child'>
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
    </div>
    <div id='child2'>
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
    </div>
</div> */}