import React, { Component } from 'react';

export default class Circle extends Component {
  render() {
      return (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="250.000000pt" height="250.000000pt" viewBox="0 0 250.000000 250.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1098 2439 c21 -23 13 -29 -30 -23 -28 5 -39 4 -34 -4 4 -6 -10 -13
-36 -17 -23 -4 -58 -13 -78 -21 -30 -11 -31 -13 -10 -13 31 -1 16 -15 -35 -31
-40 -13 -135 -67 -135 -77 0 -3 11 -2 25 1 19 5 6 -12 -53 -70 -61 -60 -69
-72 -39 -54 20 12 37 19 37 17 0 -3 -22 -29 -50 -59 -51 -55 -61 -72 -35 -62
21 8 20 3 -20 -79 l-36 -72 30 35 c17 19 31 33 31 30 0 -3 -14 -46 -31 -95
-23 -66 -33 -112 -35 -175 l-4 -85 19 68 c11 38 23 72 27 75 4 4 4 -4 0 -18
-13 -43 -18 -243 -8 -270 10 -24 11 -24 12 10 1 19 5 43 9 54 10 27 30 -74 27
-139 -2 -27 0 -63 4 -80 6 -24 8 -25 9 -7 2 46 19 20 25 -41 12 -104 26 -103
26 1 0 50 3 92 8 92 4 0 24 -5 45 -11 31 -8 37 -14 37 -38 0 -36 36 -89 79
-118 40 -27 126 -31 169 -9 45 23 79 68 95 121 13 48 15 50 60 59 29 6 65 6
94 0 45 -9 47 -11 60 -59 16 -53 51 -98 96 -121 37 -20 117 -20 153 -1 53 27
94 85 94 131 0 20 7 27 38 35 70 20 67 29 45 -124 -7 -55 2 -42 37 51 16 43
30 71 31 62 1 -10 3 -22 4 -28 1 -5 4 -16 5 -22 4 -22 19 65 19 116 1 27 -4
65 -10 85 -9 29 -8 47 4 86 12 39 16 44 16 23 1 -43 17 -33 32 20 15 51 18
160 7 232 -5 31 -4 38 2 23 5 -13 11 -23 13 -23 9 0 -13 142 -26 167 -8 15
-20 52 -26 81 -17 79 -34 106 -111 167 -39 31 -70 57 -70 59 0 2 12 1 28 -1
l27 -5 -30 26 c-16 14 -53 33 -81 41 -28 9 -59 22 -70 30 -19 14 -19 14 1 15
19 1 19 1 2 11 -11 6 -59 9 -118 7 -54 -2 -99 -1 -99 2 0 3 6 12 13 19 12 12
-36 -5 -133 -47 l-46 -19 -29 24 c-36 29 -96 62 -77 42z m143 -788 c-6 -46 -9
-86 -7 -88 2 -2 14 33 26 79 12 46 24 85 27 88 3 3 2 -31 -1 -75 l-5 -80 24
70 25 70 -4 -75 -5 -75 25 80 c40 125 41 126 38 20 l-3 -100 15 50 c29 96 33
104 29 60 -2 -22 -6 -71 -9 -110 -4 -63 -3 -66 7 -35 10 32 42 69 60 70 4 0 8
-21 8 -47 1 -46 2 -45 16 27 8 41 19 95 25 119 12 47 17 44 34 -24 8 -28 9
-27 15 20 4 32 5 18 2 -37 -2 -49 -1 -88 1 -88 3 0 12 12 21 28 16 26 16 25
11 -38 l-4 -65 18 40 c11 22 20 47 21 55 0 8 4 4 8 -10 7 -23 8 -22 24 20 l17
45 -4 -62 c-2 -35 -2 -63 0 -63 11 0 38 72 45 120 7 48 7 45 4 -22 -3 -43 -7
-97 -10 -120 l-5 -43 24 49 25 49 5 -34 c3 -19 7 -61 8 -94 l3 -60 -48 -3
c-41 -3 -48 0 -56 20 -23 56 -100 108 -163 108 -16 0 -46 -9 -67 -19 -38 -20
-101 -83 -101 -101 0 -6 -46 -10 -109 -10 -100 0 -110 2 -116 20 -3 10 -27 37
-52 60 -41 36 -44 42 -32 57 8 10 17 20 21 23 13 10 56 157 69 236 13 77 13
78 20 39 4 -22 3 -69 -2 -105 -5 -36 -11 -83 -14 -105 l-6 -40 16 28 c23 39
28 34 23 -23 -3 -27 -4 -50 -2 -50 2 0 15 37 29 83 18 55 29 116 33 187 7 99
7 101 10 35 2 -38 -2 -107 -7 -154z m-286 -56 l25 -90 -6 63 c-3 40 -1 62 6
62 5 0 10 16 10 35 0 19 3 35 8 35 40 -2 68 -103 48 -171 -13 -43 -15 -44 -51
-41 -72 6 -147 -35 -181 -100 -13 -24 -21 -28 -59 -28 -25 0 -45 4 -45 9 0 22
40 239 48 261 8 22 10 21 16 -20 4 -25 13 -56 21 -70 13 -23 14 -21 15 45 l1
70 25 -80 c14 -44 29 -83 33 -88 4 -4 4 23 0 60 -5 38 -8 102 -7 143 0 69 1
71 8 30 7 -42 59 -184 65 -178 2 2 -3 44 -11 93 -7 50 -13 110 -13 135 1 41 2
39 10 -20 5 -36 20 -105 34 -155z m93 -162 c36 -22 62 -73 62 -122 0 -144
-184 -193 -260 -69 -21 35 -27 103 -10 113 6 4 8 10 5 15 -9 15 39 60 80 75
43 16 87 11 123 -12z m554 1 c29 -15 60 -53 52 -65 -2 -4 0 -10 6 -14 17 -10
11 -78 -10 -113 -75 -123 -260 -76 -260 67 0 117 105 179 212 125z"/>
<path d="M880 1358 c-19 -13 -36 -30 -38 -38 -4 -11 -1 -10 12 3 26 25 31 21
31 -26 0 -25 6 -47 15 -54 19 -15 110 -17 130 -2 13 9 12 10 -3 5 -15 -5 -16
-2 -7 14 5 10 10 28 10 40 0 16 5 20 15 16 29 -11 -8 33 -41 49 -45 21 -86 19
-124 -7z"/>
<path d="M1495 1365 c-33 -16 -68 -59 -40 -49 10 4 15 0 15 -16 0 -12 5 -30
10 -40 9 -16 8 -19 -7 -14 -17 5 -17 5 0 -6 25 -16 102 -15 124 2 12 9 18 26
18 55 0 47 5 51 31 26 13 -13 16 -14 12 -3 -8 24 -69 60 -102 60 -17 0 -45 -7
-61 -15z"/>
<path d="M1030 946 c-8 -11 -9 -20 -1 -33 6 -10 11 -12 11 -5 0 22 18 13 24
-13 4 -14 11 -23 16 -20 5 3 7 -1 4 -9 -6 -15 23 -37 48 -35 7 0 3 5 -9 11
-35 17 -30 40 4 27 38 -14 153 -19 178 -8 15 7 9 8 -20 4 -45 -5 -156 12 -191
29 -18 10 7 12 136 12 88 -1 155 -5 151 -9 -5 -5 -15 -9 -22 -10 -8 -2 -15 -6
-16 -10 -3 -7 2 -7 25 -1 39 12 43 15 36 26 -5 10 -3 9 7 0 12 -11 9 -18 -19
-43 -18 -16 -26 -29 -19 -29 18 0 57 42 57 63 0 21 20 33 30 17 12 -19 19 11
8 33 -10 19 -29 23 -25 5 3 -18 -63 -27 -198 -27 -145 -1 -198 6 -191 25 7 18
-8 18 -24 0z"/>
<path d="M810 461 c-131 -34 -187 -59 -238 -105 -53 -48 -70 -88 -82 -188 -5
-46 -12 -102 -15 -125 l-5 -43 780 0 780 0 -5 43 c-3 23 -10 79 -15 125 -5 46
-17 99 -26 118 -23 47 -94 108 -157 133 -52 20 -243 71 -269 71 -8 0 -20 -16
-26 -35 -24 -64 -95 -148 -153 -180 -46 -26 -64 -30 -129 -30 -65 0 -83 4
-129 30 -58 32 -129 116 -153 180 -15 42 -18 42 -158 6z"/>
</g>
</svg>
      );
  }
}
