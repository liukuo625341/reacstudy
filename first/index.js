let a=1
let b=[1,2,3]
let c=[<h1>123</h1>,<span>9527</span>,<h1>123</h1>]
let color1={
	fontSize:20,
	color:'green'
}
ReactDOM.render(
	//在标签外面要这样写注释  js类型
	
	<div>
{/*标签内注释这样写*/}
//学习React
	<h1>你好啊,单身狗</h1>
	<h1>{a}</h1>
	<div>{a==1?'是的':'去求吧'}</div>
	<div style={color1}>{b}</div>
	<div>{c}</div>
	</div>,
	document.getElementById('example')
)
