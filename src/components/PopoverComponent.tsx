import { Popover } from "react-bootstrap";

type Props = {
  title: string;
  content: string;
};

const PopoverComponent = ({ title, content }: Props) => {
  return (
    <>
      <Popover id="popover-basic">
        <Popover.Header as="h3">{title}</Popover.Header>
        <Popover.Body>{content}</Popover.Body>
      </Popover>
    </>
  );
};

export default PopoverComponent;
