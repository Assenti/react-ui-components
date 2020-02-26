(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[19],{291:function(e,n,t){"use strict";t.r(n);var a=t(2),l=t(0),r=t.n(l),o=t(4),i=t(292),u=t(265),d=["property","description","default","type","value"],c=[{property:"onChange",description:"Handle input value change",default:"",type:"function",value:"return a input change event object"},{property:"value",description:"Input value",default:"",type:"string",value:""},{property:"clearable",description:"Allow clear icon on value inputted",default:"false",type:"boolean",value:"true | false"},{property:"onClear",description:"Invokes on clear icon click",default:"",type:"function",value:""},{property:"lifted",description:"Lift up the input field",default:"false",type:"boolean",value:"true | false"},{property:"autoFocus",description:"Set input focus on component mounted",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color of input field from list",default:"",type:"string",value:"primary | info | success | error"},{property:"disabled",description:"Make input field disabled",default:"false",type:"boolean",value:"true | false"},{property:"rounded",description:"Make border radius rounded",default:"false",type:"boolean",value:"true | false"},{property:"smooth",description:"Set input field borders more smooth",default:"false",type:"boolean",value:"true | false"},{property:"uppercase",description:"Transform text to upper case",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set input field size",default:"",type:"string",value:"medium | large"},{property:"prefix",description:"Set prefix",default:"",type:"any",value:""},{property:"suffix",description:"Set suffix",default:"",type:"any",value:""},{property:"width",description:"Set InputField width",default:"",type:"string | number",value:""},{property:"type",description:"Set input type",default:"text",type:"string",value:""},{property:"required",description:"Set input required",default:"false",type:"boolean",value:"true | false"},{property:"readOnly",description:"Set input readOnly",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],p=[{property:"onChange",description:"Handle files values",default:"",type:"function",value:"Return array of files"},{property:"value",description:"State value that holds uploaded file(-s)",default:"",type:"File[]",value:""},{property:"lifted",description:"Lift up the uploader",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color from list",default:"",type:"string",value:"primary | info | success | error"},{property:"disabled",description:"Make uploader disabled",default:"false",type:"boolean",value:"true | false"},{property:"rounded",description:"Make border radius rounded",default:"false",type:"boolean",value:"true | false"},{property:"smooth",description:"Set input field borders more smooth",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set input field size",default:"",type:"string",value:"medium | large"},{property:"multiple",description:"Allow choosing multiple files",default:"false",type:"boolean",value:"true | false"},{property:"accept",description:"Set accepted MIME types for files",default:"",type:"string",value:""},{property:"width",description:"Set Uploader width",default:"",type:"string | number",value:""},{property:"required",description:"Set Uploader required",default:"false",type:"boolean",value:"true | false"},{property:"title",description:"Set Uploader title",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];n.default=function(){var e=Object(l.useState)(""),n=Object(a.a)(e,2),t=n[0],s=n[1],f=Object(l.useState)(""),m=Object(a.a)(f,2),h=m[0],v=m[1],b=Object(l.useState)(""),x=Object(a.a)(b,2),g=x[0],y=x[1],w=Object(l.useState)(""),S=Object(a.a)(w,2),C=S[0],E=S[1],F=Object(l.createRef)(),I=Object(l.createRef)(),k=Object(l.createRef)(),z=function(e){E((function(n){return n.filter((function(n){return n.name!==e}))}))};return r.a.createElement("div",{className:"rui-page",ref:k},r.a.createElement("div",{className:"row align-center space-between"},r.a.createElement("div",{className:"rui-page-title"},"InputField, Uploader Components"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{onClick:function(){F.current&&F.current.scrollIntoView({behavior:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold mr-10"},"InputField API"),r.a.createElement("div",{onClick:function(){I.current&&I.current.scrollIntoView({behavior:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold"},"Uploader API"))),r.a.createElement(o.e,{outlined:!0,color:"primary",title:"Input types"},r.a.createElement("div",{className:"row wrap"},r.a.createElement("div",{className:"col"},r.a.createElement(o.l,{label:"Standard input with clear button and hint",placeholder:"Input a text",value:t,color:"primary",width:"300px",hint:"Some hint",onClear:function(){return s("")},onChange:function(e){return s(e.target.value)}}),r.a.createElement(o.l,{label:"Smooth input with prefix, clear button with lifted prop",placeholder:"Input a text",value:t,smooth:!0,lifted:!0,color:"primary",prefix:r.a.createElement(o.k,{name:"search"}),width:"300px",onClear:function(){return s("")},onChange:function(e){return s(e.target.value)}}),r.a.createElement(o.l,{label:"Rounded input field with prefix, suffix and clear button",placeholder:"Defaul size input field",value:t,rounded:!0,clearable:!0,autoFocus:!0,onClear:function(){return s("")},prefix:r.a.createElement(o.k,{name:"search"}),suffix:r.a.createElement(o.k,{name:"edit"}),color:"info",width:"300px",onChange:function(e){return s(e.target.value)}}),r.a.createElement(o.l,{label:"Disabled input field",placeholder:"Defaul size rounded input field",value:t,rounded:!0,disabled:!0,prefix:r.a.createElement(o.k,{name:"account"}),color:"info",width:"300px",onClear:function(){return s("")},onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"col"},r.a.createElement(o.l,{label:"Standard input field with suffix button",placeholder:"Search...",value:g,color:"primary",width:"100%",prefix:r.a.createElement(o.k,{name:"search"}),suffix:r.a.createElement(o.c,{name:"Search",color:"primary",onClick:function(){}}),onClear:function(){return y("")},onChange:function(e){return y(e.target.value)}}),r.a.createElement(o.l,{label:"Smooth input field with suffix button",placeholder:"Search...",value:g,color:"primary",width:"100%",smooth:!0,prefix:r.a.createElement(o.k,{name:"search"}),suffix:r.a.createElement(o.c,{name:"Search",color:"primary",onClick:function(){}}),onClear:function(){return y("")},onChange:function(e){return y(e.target.value)}}),r.a.createElement(o.l,{label:"Rounded input field with suffix button",placeholder:"Search...",value:g,color:"error",width:"100%",rounded:!0,prefix:r.a.createElement(o.k,{name:"search"}),suffix:r.a.createElement(o.c,{name:"Search",color:"error",onClick:function(){}}),onClear:function(){return y("")},onChange:function(e){return y(e.target.value)}}))),r.a.createElement(o.g,{icon:"code",iconSize:18,tooltip:"Code"},r.a.createElement(i.a,{language:"jsx",style:u.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { InputField } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    const [first, setFirst] = useState(\'\');\n    const [second, setSecond] = useState(\'\');\n\n    return (\n        <div className="row wrap">\n            <div className="col">\n                <InputField\n                    label="Standard input with clear button and hint"\n                    placeholder="Input a text" \n                    value={first}\n                    color="primary"\n                    width="300px"\n                    hint="Some hint"\n                    onClear={() => setFirst(\'\')} \n                    onChange={e => setFirst(e.target.value)}/>\n                <InputField\n                    label="Smooth input with prefix, clear button with lifted prop"\n                    placeholder="Input a text" \n                    value={first}\n                    smooth\n                    lifted\n                    color="primary"\n                    prefix={<Icon name="search"/>}\n                    width="300px"\n                    onClear={() => setFirst(\'\')} \n                    onChange={e => setFirst(e.target.value)}/>\n                <InputField\n                    label="Rounded input field with prefix, suffix and clear button"\n                    placeholder="Defaul size input field" \n                    value={first}\n                    rounded\n                    clearable\n                    autoFocus\n                    onClear={() => setFirst(\'\')} \n                    prefix={<Icon name="search"/>}\n                    suffix={<Icon name="edit"/>}\n                    color="info"\n                    width="300px"\n                    onChange={e => setFirst(e.target.value)}/>\n                <InputField\n                    label="Disabled input field"\n                    placeholder="Defaul size rounded input field" \n                    value={first}\n                    rounded\n                    disabled\n                    prefix={<Icon name="account"/>}\n                    color="info"\n                    width="300px"\n                    onClear={() => setFirst(\'\')} \n                    onChange={e => setFirst(e.target.value)}/>\n            </div>\n            <div className="col">\n                <InputField\n                    label="Standard input field with suffix button"\n                    placeholder="Search..." \n                    value={second}\n                    color="primary"\n                    width="100%"\n                    prefix={<Icon name="search"/>}\n                    suffix={<Button name="Search" color="primary" onClick={() => {}}/>}\n                    onClear={() => setSecond(\'\')} \n                    onChange={e => setSecond(e.target.value)}/>\n                <InputField\n                    label="Smooth input field with suffix button"\n                    placeholder="Search..." \n                    value={second}\n                    color="primary"\n                    width="100%"\n                    smooth\n                    prefix={<Icon name="search"/>}\n                    suffix={<Button name="Search" color="primary" onClick={() => {}}/>}\n                    onClear={() => setSecond(\'\')} \n                    onChange={e => setSecond(e.target.value)}/>\n                <InputField\n                    label="Rounded input field with suffix button"\n                    placeholder="Search..." \n                    value={second}\n                    color="error"\n                    width="100%"\n                    rounded\n                    prefix={<Icon name="search"/>}\n                    suffix={<Button name="Search" color="error" onClick={() => {}}/>}\n                    onClear={() => setSecond(\'\')} \n                    onChange={e => setSecond(e.target.value)}/>\n            </div>\n        </div>\n    )\n}'))),r.a.createElement("br",null),r.a.createElement(o.e,{outlined:!0,color:"primary",title:"Input sizes"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(o.l,{color:"info",placeholder:"777 777 77 77",value:h,label:"Default input field with label and prefix",width:"300px",prefix:r.a.createElement(o.k,{name:"smartphone"}),onClear:function(){return v("")},onChange:function(e){return v(e.target.value)}}),r.a.createElement(o.l,{size:"medium",color:"info",label:"Medium input field with label and prefix",prefix:r.a.createElement(o.k,{name:"smartphone"}),placeholder:"777 777 77 77",value:h,width:"300px",onClear:function(){return v("")},onChange:function(e){return v(e.target.value)}}),r.a.createElement(o.l,{size:"large",color:"info",label:"Large input field with label and prefix",prefix:r.a.createElement(o.k,{name:"smartphone"}),placeholder:"777 777 77 77 ",value:h,width:"300px",onClear:function(){return v("")},onChange:function(e){return v(e.target.value)}})),r.a.createElement("div",{className:"col"},r.a.createElement(o.l,{color:"info",placeholder:"777 777 77 77",value:h,rounded:!0,label:"Rounded default size input field with label and prefix",width:"300px",prefix:r.a.createElement(o.k,{name:"smartphone"}),onClear:function(){return v("")},onChange:function(e){return v(e.target.value)}}),r.a.createElement(o.l,{size:"medium",color:"info",rounded:!0,label:"Rounded medium size input field with label and prefix",prefix:r.a.createElement(o.k,{name:"smartphone"}),placeholder:"777 777 77 77",value:h,width:"300px",onClear:function(){return v("")},onChange:function(e){return v(e.target.value)}}),r.a.createElement(o.l,{size:"large",color:"info",rounded:!0,label:"Rounded large size input field with label and prefix",prefix:r.a.createElement(o.k,{name:"smartphone"}),placeholder:"777 777 77 77 ",value:h,width:"300px",onClear:function(){return v("")},onChange:function(e){return v(e.target.value)}}))),r.a.createElement(o.g,{icon:"code",iconSize:18,tooltip:"Code"},r.a.createElement(i.a,{language:"jsx",style:u.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { InputField } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    const [second, setSecond] = useState(\'\');\n\n    return (\n        <div className="row">\n            <div className="col">\n                <InputField\n                    color="info"\n                    placeholder="777 777 77 77" \n                    value={second} \n                    label="Default input field with label and prefix"\n                    width="300px"\n                    prefix={<Icon name="smartphone"/>}\n                    onClear={() => setSecond(\'\')} \n                    onChange={e => setSecond(e.target.value)}/>\n                <InputField\n                    size="medium"\n                    color="info"\n                    label="Medium input field with label and prefix"\n                    prefix={<Icon name="smartphone"/>}\n                    placeholder="777 777 77 77" \n                    value={second} \n                    width="300px"\n                    onClear={() => setSecond(\'\')} \n                    onChange={e => setSecond(e.target.value)}/>\n                <InputField\n                    size="large"\n                    color="info"\n                    label="Large input field with label and prefix"\n                    prefix={<Icon name="smartphone"/>}\n                    placeholder="777 777 77 77 " \n                    value={second} \n                    width="300px"\n                    onClear={() => setSecond(\'\')} \n                    onChange={e => setSecond(e.target.value)}/>\n            </div>\n            <div className="col">\n                <InputField\n                    color="info"\n                    placeholder="777 777 77 77" \n                    value={second}\n                    rounded \n                    label="Rounded default size input field with label and prefix"\n                    width="300px"\n                    prefix={<Icon name="smartphone"/>}\n                    onClear={() => setSecond(\'\')} \n                    onChange={e => setSecond(e.target.value)}/>\n                <InputField\n                    size="medium"\n                    color="info"\n                    rounded \n                    label="Rounded medium size input field with label and prefix"\n                    prefix={<Icon name="smartphone"/>}\n                    placeholder="777 777 77 77" \n                    value={second} \n                    width="300px"\n                    onClear={() => setSecond(\'\')} \n                    onChange={e => setSecond(e.target.value)}/>\n                <InputField\n                    size="large"\n                    color="info"\n                    rounded \n                    label="Rounded large size input field with label and prefix"\n                    prefix={<Icon name="smartphone"/>}\n                    placeholder="777 777 77 77 " \n                    value={second} \n                    width="300px"\n                    onClear={() => setSecond(\'\')} \n                    onChange={e => setSecond(e.target.value)}/>\n            </div>\n        </div>\n    )\n}'))),r.a.createElement("br",null),r.a.createElement(o.e,{outlined:!0,color:"primary",title:"Uploader"},r.a.createElement("span",{className:"fz-8 text-dark"},"Rounded Uploader"),r.a.createElement(o.y,{label:"File upload",value:C,rounded:!0,title:"\u0421hoose a file please",color:"info",multiple:!0,onDelete:z,width:300,onChange:function(e){return E(e)}}),r.a.createElement("br",null),r.a.createElement(o.y,{label:"File upload",value:C,rounded:!0,title:"\u0421hoose a file please",color:"success",multiple:!0,onDelete:z,width:300,onChange:function(e){return E(e)}}),r.a.createElement("br",null),r.a.createElement("span",{className:"fz-8 text-dark"},"Medium size Uploader"),r.a.createElement(o.y,{label:"File upload",value:C,title:"\u0421hoose a file please",size:"medium",color:"info",multiple:!0,onDelete:z,width:300,onChange:function(e){return E(e)}}),r.a.createElement("br",null),r.a.createElement("span",{className:"fz-8 text-dark"},"Disabled lifted Uploader"),r.a.createElement(o.y,{label:"File upload",value:C,title:"\u0421hoose a file please",color:"info",disabled:!0,lifted:!0,onDelete:z,width:300,onChange:function(e){return E(e)}}),r.a.createElement(o.g,{icon:"code",iconSize:18,tooltip:"Code"},r.a.createElement(i.a,{language:"jsx",style:u.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { InputField } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    const [files, setFiles] = useState(\'\');\n\n    return (\n        <div>\n            <span className="fz-8 text-dark">Rounded Uploader</span>\n            <Uploader\n                label="File upload"\n                value={files}\n                rounded\n                title="\u0421hoose a file please"\n                color="info"\n                multiple\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n            <br/>\n            <Uploader\n                label="File upload"\n                value={files}\n                rounded\n                title="\u0421hoose a file please"\n                color="success"\n                multiple\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n            <br/>\n            <span className="fz-8 text-dark">Medium size Uploader</span>\n            <Uploader\n                label="File upload"\n                value={files}\n                title="\u0421hoose a file please"\n                size="medium"\n                color="info"\n                multiple\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n            <br/>\n            <span className="fz-8 text-dark">Disabled lifted Uploader</span>\n            <Uploader\n                label="File upload"\n                value={files}\n                title="\u0421hoose a file please"\n                color="info"\n                disabled\n                lifted\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n        </div>\n    )\n}'))),r.a.createElement("h2",{ref:F},"InputField API"),r.a.createElement(o.a,{setRef:k,dark:!0,size:"medium"}),r.a.createElement(o.v,{bordered:!0,headers:d,items:c,index:!0,itemTitles:d}),r.a.createElement("h2",{ref:I},"Uploader API"),r.a.createElement(o.v,{bordered:!0,headers:d,items:p,index:!0,itemTitles:d}))}}}]);
//# sourceMappingURL=19.chunk.js.map