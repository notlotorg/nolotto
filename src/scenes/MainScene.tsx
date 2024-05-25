import { Plane as PlaneCmp } from '@react-three/drei'
import { PlaneBufferGeometryProps } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { BufferGeometry, Material, MeshStandardMaterial, Plane, VideoTexture } from 'three'

export const MainScene = () => {
  const mainScreenRef = React.useRef<any>(null)

  const planeMat = new MeshStandardMaterial({
    color: 0x00ff00,
  })

  const _requestAudioVideoPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: false, video: true })
      .then((stream) => {
        // play stream inside plane material
        const video = document.createElement('video')
        video.srcObject = stream
        video.play()
        planeMat.map = new VideoTexture(video)
        planeMat.needsUpdate = true
      })
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (!navigator.mediaDevices) {
      console.error('navigator.mediaDevices is not available')
      return
    }
    _requestAudioVideoPermission()
  }, [])

  // add plane on scene visible from both sides
  return (
    <>
    {
      // keep ration 16:9
    }
      <PlaneCmp args={[4, 2.25, 1, 1] as PlaneBufferGeometryProps['args']}

        position={[0, 0, -1]}
        rotation={[0, 0, 0]}
        material={planeMat}
        ref={mainScreenRef}>
          
          </PlaneCmp>
    </>
  )
}
