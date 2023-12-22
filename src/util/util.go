package util

import (
	"fmt"
	"time"
	"github.com/sony/sonyflake"
)

var unique *sonyflake.Sonyflake

func init() {
	unique =  sonyflake.NewSonyflake(sonyflake.Settings{time.Unix(0,0),func()(uint16, error){return 0x0c29,nil},nil})
	if unique == nil {
		panic("sonyflake not created")
	}
}

func NextID() string {
	id,err := unique.NextID()
	if err != nil {
		panic(fmt.Sprintf("%v", err))
	}
	return fmt.Sprintf("ID_%X",id)
}
