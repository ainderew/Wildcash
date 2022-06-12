interface props {
    eventData: {
      eventName: string;
      eventDay: string;
      eventMonth: string;
      startTime: string;
      endTime: string;
      eventPoints: number;
    };
  }

const ModalEvent: React.FC<props> = ({eventData}:props) => {
    
  return <div className=""></div>;
};

export default ModalEvent;
