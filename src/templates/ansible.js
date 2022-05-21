export const ansibleTemplate = `-
  name: '{{ request.urlWithoutQuery }}'
  uri:
    url: '{{ request.url }}'
    method: {{ request.method | upper }}
{%- if (request.data | isString) and (request.data) %}
    body:
      {{ data | dump }}
    body_format: json
{%- endif %}
{%- if request.headers %}
    headers:
    {%- for key, value in request.headers %}
      {{ key }}: '{{ value }}'
    {%- endfor %}
{%- endif %}
{%- if request.auth %}
    {%- set url_username = request.auth[0] %}
    {%- set url_password = request.auth[1] %}
    {%- if url_username %}
    url_username: {{ url_username }}
    {%- endif %}
    {%- if url_password %}
    url_password: {{ url_password }}
    {%- endif %}
{%- endif %}
{%- if request.insecure %}
    validate_certs: no
{%- endif %}
  register: result
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zaWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuc2libGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E4QjlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYW5zaWJsZVRlbXBsYXRlID0gYC1cbiAgbmFtZTogJ3t7IHJlcXVlc3QudXJsV2l0aG91dFF1ZXJ5IH19J1xuICB1cmk6XG4gICAgdXJsOiAne3sgcmVxdWVzdC51cmwgfX0nXG4gICAgbWV0aG9kOiB7eyByZXF1ZXN0Lm1ldGhvZCB8IHVwcGVyIH19XG57JS0gaWYgKHJlcXVlc3QuZGF0YSB8IGlzU3RyaW5nKSBhbmQgKHJlcXVlc3QuZGF0YSkgJX1cbiAgICBib2R5OlxuICAgICAge3sgZGF0YSB8IGR1bXAgfX1cbiAgICBib2R5X2Zvcm1hdDoganNvblxueyUtIGVuZGlmICV9XG57JS0gaWYgcmVxdWVzdC5oZWFkZXJzICV9XG4gICAgaGVhZGVyczpcbiAgICB7JS0gZm9yIGtleSwgdmFsdWUgaW4gcmVxdWVzdC5oZWFkZXJzICV9XG4gICAgICB7eyBrZXkgfX06ICd7eyB2YWx1ZSB9fSdcbiAgICB7JS0gZW5kZm9yICV9XG57JS0gZW5kaWYgJX1cbnslLSBpZiByZXF1ZXN0LmF1dGggJX1cbiAgICB7JS0gc2V0IHVybF91c2VybmFtZSA9IHJlcXVlc3QuYXV0aFswXSAlfVxuICAgIHslLSBzZXQgdXJsX3Bhc3N3b3JkID0gcmVxdWVzdC5hdXRoWzFdICV9XG4gICAgeyUtIGlmIHVybF91c2VybmFtZSAlfVxuICAgIHVybF91c2VybmFtZToge3sgdXJsX3VzZXJuYW1lIH19XG4gICAgeyUtIGVuZGlmICV9XG4gICAgeyUtIGlmIHVybF9wYXNzd29yZCAlfVxuICAgIHVybF9wYXNzd29yZDoge3sgdXJsX3Bhc3N3b3JkIH19XG4gICAgeyUtIGVuZGlmICV9XG57JS0gZW5kaWYgJX1cbnslLSBpZiByZXF1ZXN0Lmluc2VjdXJlICV9XG4gICAgdmFsaWRhdGVfY2VydHM6IG5vXG57JS0gZW5kaWYgJX1cbiAgcmVnaXN0ZXI6IHJlc3VsdFxuYDtcbiJdfQ==