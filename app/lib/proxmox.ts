import Proxmox from "proxmox";

const PROXMOX_USER = "root@pam";  // 사용자 계정
const PROXMOX_PASSWORD = "phumedu!@#$";  // 비밀번호
const PROXMOX_HOST = "192.168.10.204";  // Proxmox 서버 주소


// Proxmox 인스턴스 생성
const proxmox = new Proxmox(PROXMOX_USER, PROXMOX_PASSWORD, PROXMOX_HOST);

/**
 * Proxmox 클러스터 상태 가져오기
 */
export async function getClusterStatus() {
  return new Promise((resolve, reject) => {
    proxmox.getClusterStatus((err: any, response: any) => {
      if (err) reject(err);
      else resolve(JSON.parse(response));
    });
  });
}

/**
 * Proxmox 노드 목록 가져오기
 */
export async function getNodes() {
  return new Promise((resolve, reject) => {
    proxmox.getNodes((err: any, response: any) => {
      if (err) reject(err);
      else resolve(JSON.parse(response));
    });
  });
}

/**
 * 특정 노드의 리소스 사용량 가져오기
 */
export async function getNodestat(node: string, timeframe: string = "day") {
    return new Promise((resolve, reject) => {
      proxmox.getNodeRRDData(node,  timeframe  ,(err: any, response: any) => {
        if (err) reject(err);
        console.log(`api 리스폰스다:`, response);
        try {
            resolve(JSON.parse(response));
        }catch(e){
            reject(new Error("Failed to parse response") + response);
        }
      });
    });
  }