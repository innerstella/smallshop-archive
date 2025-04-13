import { useEffect } from "react"

declare global {
  interface Window {
    adsbygoogle: unknown[] // ← 요거!
  }
}

const DisplayAds = () => {
  useEffect(() => {
    const pushAd = () => {
      try {
        window.adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    const interval = setInterval(() => {
      if (window.adsbygoogle) {
        pushAd()
        clearInterval(interval)
      }
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2200970422276014"
      data-ad-slot="3545458418"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default DisplayAds
