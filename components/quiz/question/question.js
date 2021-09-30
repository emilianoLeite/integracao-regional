
export default function Question({ title, subtitle }) {
  return (
    <>
      <h4 
        dangerouslySetInnerHTML={{__html: title}}
      ></h4>
      {subtitle ? 
        <p
          dangerouslySetInnerHTML={{__html: subtitle}}
          style={{
            maxWidth: "410px",
            marginLeft: "58px",
          }}
        ></p> 
        : null
      }
    </>
  );
}
