import {
  Heading2,
  Heading3,
  Heading4,
  LinkedHeading,
} from "@/components/typography";

export function LinkedHeadingExample() {
  return (
    <div>
      <LinkedHeading id="section-1">
        <Heading2>Section 1</Heading2>
      </LinkedHeading>
      <LinkedHeading id="subsection-1-1">
        <Heading3>Subsection 1.1</Heading3>
      </LinkedHeading>
      <LinkedHeading id="subsection-1-2">
        <Heading3>Subsection 1.2</Heading3>
      </LinkedHeading>
      <LinkedHeading id="detail-1-2-1">
        <Heading4>Detail 1.2.1</Heading4>
      </LinkedHeading>
    </div>
  );
}
