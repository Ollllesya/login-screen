import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const IosComponent = (props) => (
<Svg
xmlns="http://www.w3.org/2000/svg"
width={35}
height={35}
fill="none"
{...props}
>
<G clipPath="url(#a)">
<Path
fill="#000"
d="M17.5 0C7.827 0 0 7.827 0 17.5S7.827 35 17.5 35 35 27.173 35 17.5 27.173 0 17.5 0Zm1.019 7.13c.765-.957 2.167-1.593 3.247-1.654.13 1.271-.383 2.61-1.149 3.5-.765.957-2.037 1.654-3.247 1.524-.191-1.271.451-2.611 1.149-3.37ZM24.82 24.69c-.888 1.333-1.845 2.673-3.37 2.735-1.463 0-1.975-.889-3.63-.889-1.716 0-2.228.827-3.63.889-1.463.061-2.543-1.463-3.5-2.803-1.907-2.734-3.308-7.697-1.401-11.074.957-1.654 2.673-2.734 4.58-2.734 1.402 0 2.735.957 3.63.957s2.481-1.21 4.197-1.02c.698 0 2.735.322 4.006 2.168-.13.061-2.42 1.401-2.351 4.197 0 3.309 2.925 4.457 2.925 4.457.007.062-.444 1.593-1.456 3.117Z"
/>
</G>
<Defs>
<ClipPath id="a">
<Path fill="#fff" d="M0 0h35v35H0z" />
</ClipPath>
</Defs>
</Svg>
)
export default IosComponent