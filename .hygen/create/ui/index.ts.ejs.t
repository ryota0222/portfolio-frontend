---
to: <%= abs_path %>/index.ts
---

export * from './<%= component_name %>'
<% if (have_type) { -%>
export * from './type'
<% } -%>
<% if (have_hook) { -%>
export * from './use<%= component_name %>'
<% } -%>
