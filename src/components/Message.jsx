import React from 'react'

const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-md bg-white`,
    name: `fixed mt-[-4rem] text-gray-100 text-xs`,
    sent: `bg-[#395dff max-w-1/2 text-white flex-row-reverse text-end float-right rounded-bl-full`,
    recieved: `bg-[#e5e5ea] max-w-1/2 text-black float-left rounded-br-full`
}

const Message = ({message}) => {
  return (
    <div>
        <div className={style.message}>
            <p className={style.name}>Iver</p>
            <p>{message.text}</p>
        </div>
    </div>
  )
}

export default Message;