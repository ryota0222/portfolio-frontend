---
to: "<%= have_hook ? `${abs_path}/use${component_name}.ts` : null %>"
---
import { Use<%= component_name %> } from './type'

const use<%= component_name %> = (): [boolean] => {
  
}

export default use<%= component_name %>
