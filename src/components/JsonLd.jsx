/**
 * Renders a JSON-LD <script> tag safely. JSON.stringify does not escape "<",
 * so a literal "</script>" inside a string value would otherwise break out
 * of the script tag — escape it to "<" before injecting.
 */
export function JsonLd({ data }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
