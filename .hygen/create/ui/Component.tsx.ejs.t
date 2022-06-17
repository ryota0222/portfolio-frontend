---
to: <%= abs_path %>/<%= component_name %>.tsx
---
<% if (memoize) { -%>
import React, { memo } from "react";
<% } else { -%>
import React from "react";
<% } -%>
<% if (have_style) { -%>
import {} from '@/components/<%= path %>/module.style'
<% } -%>
<% if (have_consts) { -%>
import {} from './const'
<% } -%>
<% if (have_type) { -%>
import { Props } from './type'
<% } -%>

<% if (memoize) { -%>
export const <%= component_name %>: <%- type_annotate %> = memo(<%= props %> => {
  return (
    <></>
  );
})
<% } else { -%>
export const <%= component_name %>: <%- type_annotate %> = <%= props %> => {
  return (
    <></>
  );
}
<% } -%>

