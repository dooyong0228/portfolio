import { useState } from 'react';
import '../css/Projects.css';

const Projects = () => {
  const [choice, SetChoice] = useState<number>(1);
  return (
    <>
    <a id="Projects"></a>
    <div className="Projects">
      <div className='Buttons'>
        {(
          choice==1 ? 
          <div className='ButtonPressed' onClick={()=>SetChoice(1)}><h2>CardNews</h2></div> :
          <div className='Button' onClick={()=>SetChoice(1)}><h2>CardNews</h2></div>
        )}
        {(
          choice==2 ? 
          <div className='ButtonPressed' onClick={()=>SetChoice(2)}><h2>Article</h2></div> :
          <div className='Button' onClick={()=>SetChoice(2)}><h2>Article</h2></div>
        )}
        {(
          choice==3 ? 
          <div className='ButtonPressed' onClick={()=>SetChoice(3)}><h2>PostCard</h2></div> :
          <div className='Button' onClick={()=>SetChoice(3)}><h2>PostCard</h2></div>
        )
        }
      </div>
      {choice==1 ? 
      <div className='CardNews'>
        <div className='titleContainer'>
          <h1>Card News</h1>
        </div>
        <div className='contentContainer'>
          <div className='picContainer'>
            <div className='pic1' />
          </div>
          <div className='paraContainer'>
            <p>
            1. 데이터 분석 역량:AI 뉴스 컨텐츠 제작에서 데이터 분석 역할을 맡았습니다. 대량의 데이터를 수집하고 분석하여 트렌드와 독자 관심사를 파악하며, 이를 기반으로 뉴스 콘텐츠를 개발했습니다. 이 경험을 통해 데이터 분석 및 시각화 능력을 향상시키고, 중요 정보 식별 능력을 강화했습니다.
            </p>
            <p>
            2. 콘텐츠 생성 능력: 뉴스 콘텐츠의 생성과 품질 향상에도 참여했습니다. AI를 활용하여 자동 뉴스 기사 작성 프로세스를 개선하며, 콘텐츠의 창의성과 글쓰기 스킬을 향상시켰습니다.
            </p>
            <p>
            3. 기술 개발 및 혁신적 업무:AI 뉴스 컨텐츠 제작 과정에서 AI 모델의 개발과 향상, 그리고 사용자 경험 개선에 기여했습니다. 기술 개발 업무를 통해 AI 솔루션을 혁신하고, 사용자들에게 더 나은 서비스를 제공하는 방법을 학습하였습니다.
            </p>
            <p>
            이러한 경험을 통해 전문성을 향상하고, 여러 산업에서 AI 기술이 어떻게 변화를 가져오고 있는지 직접 체험하며, 다양한 도전에 대한 해결책을 찾는 능력을 기를 수 있었습니다.
            </p>
          </div>
        </div>
      </div>
      :
      (choice==2 ? 
        <div className='Article'>
        <div className='titleContainer'>
          <h1>Article</h1>
        </div>
        <div className='contentContainer'>
          <div className='picContainer'>
            <div className='pic1' />
          </div>
          <div className='paraContainer'>
            <p>
            1. 복잡한 개념을 이해 가능하게 전달하기:
               복잡한 개념을 단순하게 설명하고, 중요한 키 포인트를 강조하여 독자들이 AI 기술을 쉽게 이해할 수 있도록 노력했습니다.
            </p>
            <p>
            2. 논문 분석 및 요약 능력:
              논문을 읽고 그 핵심 내용을 추출하고 요약하는 능력을 갖추었습니다. AI 연구 커뮤니티의 최신 동향을 파악하고, 이를 뉴스 기사나 다른 컨텐츠로 전달하는데 도움이 되었습니다.
            </p>
            <p>
            3. 원문 기사 분석 및 요약 능력:
              원문을 해석하여 독자들이 복잡한 기사를 더 쉽게 이해할 수 있도록 도움을 주었습니다. 이러한 분석 및 요약 능력은 AI관련 주제를 다루는 동안 핵심 정보를 추출하고 독자에게 전달하는 과정에서 중요한 도구가 되었습니다.

            </p>
            <p>
             AI 기술과 관련된 최신 정보를 공유하고, 독자들에게 가치 있는 정보를 제공하는 역할을 수행하는데 기여하였습니다. 이러한 경험을 통해 컴퓨터기술에 대한 이해와 전문성을 높이고, 뉴스 기사 작성 및 기술 커뮤니케이션 능력을 개선하는데 기여하였습니다. 
            이를 통해 주어진 주제에 대해 정보를 깊게 이해하고 중요한 통찰력을 제공하며, 누군가에게 가치 있는 정보를 전달하는 역할을 수행하는데 자신감을 가지고 있습니다.
            </p>
          </div>
        </div>
      </div>
      :
      <>
         <div className='Postcard'>
        <div className='titleContainer'>
          <h1>PostCard</h1>
        </div>
        <div className='contentContainer'>
          <div className='picContainer'>
            <div className='pic1' />
          </div>
          <div className='paraContainer'>
          <p>AI 기사의 포스트 카드 디자인을 기획하고 작성하는 경험을 통해, 디자인이 어떻게 사람들의 호기심을 자극하고, 관심을 유도하는 방법을 깊이 연구하였습니다. 이미지, 색상, 폰트 및 레이아웃 선택에 주의를 기울여 AI 기술의 복잡한 측면을 시각적으로 간결하게 표현하였습니다.</p>

          <p>이러한 작업을 통해 포스트 카드가 독자들의 마음을 사로잡고 AI 기술에 대한 호기심을 자극하는 효과적인 수단이 될 수 있음을 깨달았습니다. 디자인이 메시지 전달에 어떻게 중요한 역할을 하는지를 배웠으며, 미적 감각과 커뮤니케이션 능력을 개선하였습니다.</p>

          <p>이러한 결과를 토대로, 앞으로 더 효과적인 디자인 및 커뮤니케이션 작업을 수행하고 AI 기술에 대한 관심을 더욱 높일 수 있는 능력을 키우고자 노력하고 있습니다.</p>

          </div>
        </div>
      </div>
      </>)
      }
    </div>
    </>
  )
}

export default Projects;