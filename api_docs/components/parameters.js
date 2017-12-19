// import React from 'react';
// import classnames from 'classnames';
// import Prism from 'prismjs';
//
// class Parameters extends React.Component {
//   render() {
//     return (
//       <div className="apiCodeEmbed">
//         <ul>
//           {
//             _.map(snippetLanguages, (
//               { name },
//               index,
//             ) => (
//               <li
//                 className={classnames({
//                   tabHeaderItem: true,
//                   active: (index === 0),
//                 })}
//                 data-id={index}
//               >
//                 {name}
//               </li>
//             ))
//           }
//         </ul>
//
//         <div>
//           {
//             _.map(snippetLanguages, (
//               { prismKey },
//               index,
//             ) => (
//               <div
//                 className={classnames({
//                   tabContentItem: true,
//                   active: (index === 0),
//                 })}
//               >
//             <pre>
//               <code
//                 dangerouslySetInnerHTML={{
//                   __html: Prism.highlight(
//                     decodeURIComponent(snippets[index].content),
//                     Prism.languages[prismKey],
//                   ),
//                 }}
//               />
//             </pre>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Parameters;
