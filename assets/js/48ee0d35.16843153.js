(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[922],{1592:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=i(2122),a=i(9756),o=(i(7294),i(3905)),r={sidebar_position:1,description:"Getting started with sttp-oauth2"},s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"Getting started with sttp-oauth2",source:"@site/../mdoc/target/mdoc/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/sttp-oauth2/docs/getting-started",editUrl:"https://github.com/ocadotechnology/sttp-oauth2/edit/main/docs/getting-started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Getting started with sttp-oauth2"},sidebar:"tutorialSidebar",next:{title:"Client credentials grant",permalink:"/sttp-oauth2/docs/client-credentials"}},d=[{value:"About",id:"about",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],l={toc:d};function u(t){var e=t.components,i=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about"},"About"),(0,o.kt)("p",null,"This library aims to provide easy integration with OAuth2 providers based on ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749"},"OAuth2 RFC")," using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/softwaremill/sttp"},"sttp")," client.\nIt uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/circe/circe"},"circe")," for JSON serialization/deserialization."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To use this library add following dependency to your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'"com.ocadotechnology" %% "sttp-oauth2" % "0.9.0"\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Depending on your use case, please see documentation for the grant you want to support."),(0,o.kt)("p",null,"Each grant is implemented in an object with explicit return and error types on methods and additionally, Tagless Final friendly ",(0,o.kt)("inlineCode",{parentName:"p"},"*Provider")," interface."))}u.isMDXComponent=!0}}]);