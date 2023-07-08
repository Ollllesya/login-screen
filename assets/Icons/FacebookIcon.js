import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const FacebookIcon = (props) => (
<Svg
xmlns="http://www.w3.org/2000/svg"
width={35}
height={35}
fill="none"
{...props}
>
<G clipPath="url(#a)">
    <Path
    fill="#1877F2"
    d="M35 17.5C35 7.835 27.165 0 17.5 0S0 7.835 0 17.5c0 8.735 6.4 15.975 14.766 17.288v-12.23h-4.444V17.5h4.444v-3.855c0-4.386 2.612-6.809 6.61-6.809 1.914 0 3.917.342 3.917.342v4.306h-2.207c-2.174 0-2.852 1.35-2.852 2.733V17.5h4.854l-.776 5.059h-4.078v12.229C28.6 33.474 35 26.235 35 17.5Z"
    />
    <Path
    fill="#fff"
    d="m24.312 22.559.776-5.059h-4.854v-3.283c0-1.384.678-2.733 2.852-2.733h2.207V7.178s-2.003-.342-3.917-.342c-3.998 0-6.61 2.423-6.61 6.809V17.5h-4.444v5.059h4.444v12.228a17.631 17.631 0 0 0 5.468 0V22.56h4.078Z"
    />
</G>
<Defs>
    <ClipPath id="a">
    <Path fill="#fff" d="M0 0h35v35H0z" />
    </ClipPath>
</Defs>
</Svg>
)
export default FacebookIcon